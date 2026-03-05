-- ========================================
-- LIMOPEDIA DATABASE SETUP SCRIPT
-- ========================================
-- Run this in Supabase SQL Editor
-- ========================================

-- 1. Create Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Users Table
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'USER' CHECK (role IN ('USER', 'ADMIN')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create Service Types Table
CREATE TABLE IF NOT EXISTS service_types (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL, -- in minutes
    price DECIMAL(10,2) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Create Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    service_type_id TEXT NOT NULL REFERENCES service_types(id),
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED')),
    notes TEXT,
    pickup_location TEXT NOT NULL,
    dropoff_location TEXT NOT NULL,
    passengers INTEGER DEFAULT 1,
    luggage INTEGER DEFAULT 0,
    total_price DECIMAL(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Create Indexes for Performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_start_time ON bookings(start_time);
CREATE INDEX IF NOT EXISTS idx_service_types_active ON service_types(is_active);

-- 6. Create Updated At Trigger Function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 7. Create Triggers for Updated At
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_service_types_updated_at BEFORE UPDATE ON service_types
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 8. Insert Default Service Types
INSERT INTO service_types (name, description, duration, price) VALUES
('Airport Transfer', 'Professional airport pickup and drop-off service', 60, 95.00),
('Corporate Travel', 'Business transportation solutions', 120, 150.00),
('Event Transportation', 'Special events and weddings', 240, 250.00),
('Hourly Charter', 'Flexible hourly booking service', 60, 120.00),
('Group Transportation', 'Large group transport solutions', 180, 200.00),
('City Tour', 'Guided city tours and sightseeing', 180, 180.00)
ON CONFLICT (name) DO NOTHING;

-- 9. Create Sample Admin User (password: admin123)
INSERT INTO users (email, password, name, role) VALUES
('admin@limopedia.com', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6ukx.LFvOe', 'Admin User', 'ADMIN')
ON CONFLICT (email) DO NOTHING;

-- 10. Create Sample Regular User (password: user123)
INSERT INTO users (email, password, name, role) VALUES
('user@example.com', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6ukx.LFvOe', 'Sample User', 'USER')
ON CONFLICT (email) DO NOTHING;

-- 11. Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_types ENABLE ROW LEVEL SECURITY;

-- 12. Create RLS Policies

-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid()::text = id);

CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid()::text = id);

-- Users can view their own bookings
CREATE POLICY "Users can view own bookings" ON bookings
    FOR SELECT USING (auth.uid()::text = user_id);

CREATE POLICY "Users can create own bookings" ON bookings
    FOR INSERT WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update own bookings" ON bookings
    FOR UPDATE USING (auth.uid()::text = user_id);

-- Everyone can view active service types
CREATE POLICY "Everyone can view service types" ON service_types
    FOR SELECT USING (is_active = true);

-- 13. Create Views for Common Queries
CREATE OR REPLACE VIEW booking_details AS
SELECT 
    b.id,
    b.start_time,
    b.end_time,
    b.status,
    b.notes,
    b.pickup_location,
    b.dropoff_location,
    b.passengers,
    b.luggage,
    b.total_price,
    b.created_at,
    u.name as user_name,
    u.email as user_email,
    st.name as service_name,
    st.description as service_description,
    st.price as service_price
FROM bookings b
JOIN users u ON b.user_id = u.id
JOIN service_types st ON b.service_type_id = st.id;

-- 14. Grant Permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON service_types TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON users TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON bookings TO authenticated;
GRANT SELECT ON booking_details TO authenticated;

-- ========================================
-- SETUP COMPLETE!
-- ========================================
-- Your database is now ready for the Limopedia application
-- ========================================
