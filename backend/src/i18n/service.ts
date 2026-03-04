import { readFileSync } from 'fs';
import { join } from 'path';

export interface TranslationDictionary {
  [key: string]: string | TranslationDictionary;
}

export interface I18nTemplates {
  [language: string]: TranslationDictionary;
}

export class I18nService {
  private static instance: I18nService;
  private templates!: I18nTemplates;
  private defaultLanguage = 'en';
  private supportedLanguages = ['en', 'es', 'fr'];

  private constructor() {
    this.loadTemplates();
  }

  public static getInstance(): I18nService {
    if (!I18nService.instance) {
      I18nService.instance = new I18nService();
    }
    return I18nService.instance;
  }

  private loadTemplates(): void {
    try {
      const templatesPath = join(__dirname, 'templates.json');
      const fileContent = readFileSync(templatesPath, 'utf-8');
      this.templates = JSON.parse(fileContent);
    } catch (error) {
      console.error('Failed to load i18n templates:', error);
      this.templates = {};
    }
  }

  public getTranslations(language: string): TranslationDictionary {
    // Return the requested language if available, otherwise fallback to default
    return this.templates[language] || this.templates[this.defaultLanguage] || {};
  }

  public getSupportedLanguages(): string[] {
    return this.supportedLanguages;
  }

  public isLanguageSupported(language: string): boolean {
    return this.supportedLanguages.includes(language);
  }

  public translate(key: string, language: string = this.defaultLanguage, params?: { [key: string]: string }): string {
    const translations = this.getTranslations(language);
    const value = this.getNestedValue(translations, key);
    
    if (typeof value !== 'string') {
      // Fallback to default language if key not found
      const fallbackTranslations = this.getTranslations(this.defaultLanguage);
      const fallbackValue = this.getNestedValue(fallbackTranslations, key);
      
      if (typeof fallbackValue === 'string') {
        return this.interpolate(fallbackValue, params);
      }
      
      // Return key if no translation found
      return key;
    }

    return this.interpolate(value, params);
  }

  public getEmailTemplate(templateName: string, language: string = this.defaultLanguage): any {
    const translations = this.getTranslations(language);
    const emailTemplates = this.getNestedValue(translations, 'email') as TranslationDictionary;
    const template = this.getNestedValue(emailTemplates, templateName);

    return template || {};
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  private interpolate(template: string, params?: { [key: string]: string }): string {
    if (!params) {
      return template;
    }

    return template.replace(/\{(\w+)\}/g, (match, key) => {
      return params[key] !== undefined ? params[key] : match;
    });
  }

  public reloadTemplates(): void {
    this.loadTemplates();
  }

  // Helper method for email templates with parameter substitution
  public renderEmailTemplate(templateName: string, language: string, params: { [key: string]: string }): {
    subject: string;
    greeting: string;
    body: string;
    cta?: string;
    footer: string;
  } {
    const template = this.getEmailTemplate(templateName, language);
    
    return {
      subject: this.interpolate(template.subject || '', params),
      greeting: this.interpolate(template.greeting || '', params),
      body: this.interpolate(template.body || '', params),
      cta: template.cta ? this.interpolate(template.cta, params) : undefined,
      footer: this.interpolate(template.footer || '', params)
    } as {
      subject: string;
      greeting: string;
      body: string;
      cta?: string;
      footer: string;
    };
  }

  // Get validation messages for a specific language
  public getValidationMessages(language: string = this.defaultLanguage): TranslationDictionary {
    const translations = this.getTranslations(language);
    return this.getNestedValue(translations, 'validation') as TranslationDictionary || {};
  }

  // Get error messages for a specific language
  public getErrorMessages(language: string = this.defaultLanguage): TranslationDictionary {
    const translations = this.getTranslations(language);
    return this.getNestedValue(translations, 'messages') as TranslationDictionary || {};
  }

  // Get notification messages for a specific language
  public getNotificationMessages(language: string = this.defaultLanguage): TranslationDictionary {
    const translations = this.getTranslations(language);
    return this.getNestedValue(translations, 'notifications') as TranslationDictionary || {};
  }
}
