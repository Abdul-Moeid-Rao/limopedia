import { Router, Request, Response } from 'express';
import { I18nService } from '../i18n/service';

const router = Router();
const i18nService = I18nService.getInstance();

// Get translations for a specific language
router.get('/:lang', (req: Request, res: Response) => {
  try {
    const { lang } = req.params;

    if (!lang) {
      return res.status(400).json({
        error: 'Language parameter is required',
        message: 'Please provide a language code (e.g., en, es, fr)'
      });
    }

    // Validate language format (2-3 letter language code)
    if (!/^[a-z]{2,3}$/i.test(lang as string)) {
      return res.status(400).json({
        error: 'Invalid language format',
        message: 'Language code must be 2-3 letters (e.g., en, es, fr)'
      });
    }

    const normalizedLang = (lang as string).toLowerCase();

    // Check if language is supported
    if (!i18nService.isLanguageSupported(normalizedLang)) {
      return res.status(404).json({
        error: 'Language not supported',
        message: `Supported languages: ${i18nService.getSupportedLanguages().join(', ')}`,
        supportedLanguages: i18nService.getSupportedLanguages()
      });
    }

    const translations = i18nService.getTranslations(normalizedLang);

    return res.json({
      message: 'Translations retrieved successfully',
      data: {
        language: normalizedLang,
        translations,
        supportedLanguages: i18nService.getSupportedLanguages()
      }
    });
  } catch (error) {
    console.error('Get translations error:', error);
    res.status(500).json({
      error: 'Failed to retrieve translations',
      message: 'Internal server error'
    });
  }
});

// Get supported languages
router.get('/', (req: Request, res: Response) => {
  try {
    const supportedLanguages = i18nService.getSupportedLanguages();

    return res.json({
      message: 'Supported languages retrieved successfully',
      data: {
        supportedLanguages,
        defaultLanguage: 'en'
      }
    });
  } catch (error) {
    console.error('Get supported languages error:', error);
    res.status(500).json({
      error: 'Failed to retrieve supported languages',
      message: 'Internal server error'
    });
  }
});

// Get email template for a specific language and template type
router.get('/:lang/email/:templateName', (req: Request, res: Response) => {
  try {
    const { lang, templateName } = req.params;

    if (!lang || !templateName) {
      return res.status(400).json({
        error: 'Language and template name are required',
        message: 'Please provide both language code and template name'
      });
    }

    const normalizedLang = lang.toLowerCase();

    if (!i18nService.isLanguageSupported(normalizedLang)) {
      return res.status(404).json({
        error: 'Language not supported',
        message: `Supported languages: ${i18nService.getSupportedLanguages().join(', ')}`,
        supportedLanguages: i18nService.getSupportedLanguages()
      });
    }

    const template = i18nService.getEmailTemplate(templateName as string, normalizedLang);

    if (!template || Object.keys(template).length === 0) {
      return res.status(404).json({
        error: 'Email template not found',
        message: `Template '${templateName}' not found for language '${normalizedLang}'`
      });
    }

    return res.json({
      message: 'Email template retrieved successfully',
      data: {
        language: normalizedLang,
        templateName,
        template
      }
    });
  } catch (error) {
    console.error('Get email template error:', error);
    res.status(500).json({
      error: 'Failed to retrieve email template',
      message: 'Internal server error'
    });
  }
});

// Render email template with parameters
router.post('/:lang/email/:templateName/render', (req: Request, res: Response) => {
  try {
    const { lang, templateName } = req.params;
    const params = req.body;

    if (!lang || !templateName) {
      return res.status(400).json({
        error: 'Language and template name are required',
        message: 'Please provide both language code and template name'
      });
    }

    const normalizedLang = lang.toLowerCase();

    if (!i18nService.isLanguageSupported(normalizedLang)) {
      return res.status(404).json({
        error: 'Language not supported',
        message: `Supported languages: ${i18nService.getSupportedLanguages().join(', ')}`,
        supportedLanguages: i18nService.getSupportedLanguages()
      });
    }

    if (!params || typeof params !== 'object') {
      return res.status(400).json({
        error: 'Parameters are required',
        message: 'Please provide parameters object in the request body'
      });
    }

    const renderedTemplate = i18nService.renderEmailTemplate(templateName as string, normalizedLang, params);

    return res.json({
      message: 'Email template rendered successfully',
      data: {
        language: normalizedLang,
        templateName,
        params,
        renderedTemplate
      }
    });
  } catch (error) {
    console.error('Render email template error:', error);
    res.status(500).json({
      error: 'Failed to render email template',
      message: 'Internal server error'
    });
  }
});

// Get validation messages for a specific language
router.get('/:lang/validation', (req: Request, res: Response) => {
  try {
    const { lang } = req.params;

    if (!lang) {
      return res.status(400).json({
        error: 'Language parameter is required',
        message: 'Please provide a language code (e.g., en, es, fr)'
      });
    }

    const normalizedLang = lang.toLowerCase();

    if (!i18nService.isLanguageSupported(normalizedLang)) {
      return res.status(404).json({
        error: 'Language not supported',
        message: `Supported languages: ${i18nService.getSupportedLanguages().join(', ')}`,
        supportedLanguages: i18nService.getSupportedLanguages()
      });
    }

    const validationMessages = i18nService.getValidationMessages(normalizedLang);

    return res.json({
      message: 'Validation messages retrieved successfully',
      data: {
        language: normalizedLang,
        validationMessages
      }
    });
  } catch (error) {
    console.error('Get validation messages error:', error);
    res.status(500).json({
      error: 'Failed to retrieve validation messages',
      message: 'Internal server error'
    });
  }
});

// Get error messages for a specific language
router.get('/:lang/errors', (req: Request, res: Response) => {
  try {
    const { lang } = req.params;

    if (!lang) {
      return res.status(400).json({
        error: 'Language parameter is required',
        message: 'Please provide a language code (e.g., en, es, fr)'
      });
    }

    const normalizedLang = lang.toLowerCase();

    if (!i18nService.isLanguageSupported(normalizedLang)) {
      return res.status(404).json({
        error: 'Language not supported',
        message: `Supported languages: ${i18nService.getSupportedLanguages().join(', ')}`,
        supportedLanguages: i18nService.getSupportedLanguages()
      });
    }

    const errorMessages = i18nService.getErrorMessages(normalizedLang);

    return res.json({
      message: 'Error messages retrieved successfully',
      data: {
        language: normalizedLang,
        errorMessages
      }
    });
  } catch (error) {
    console.error('Get error messages error:', error);
    res.status(500).json({
      error: 'Failed to retrieve error messages',
      message: 'Internal server error'
    });
  }
});

// Translate a specific key
router.post('/:lang/translate', (req: Request, res: Response) => {
  try {
    const { lang } = req.params;
    const { key, params } = req.body;

    if (!lang) {
      return res.status(400).json({
        error: 'Language parameter is required',
        message: 'Please provide a language code (e.g., en, es, fr)'
      });
    }

    if (!key) {
      return res.status(400).json({
        error: 'Translation key is required',
        message: 'Please provide a translation key'
      });
    }

    const normalizedLang = lang.toLowerCase();

    if (!i18nService.isLanguageSupported(normalizedLang)) {
      return res.status(404).json({
        error: 'Language not supported',
        message: `Supported languages: ${i18nService.getSupportedLanguages().join(', ')}`,
        supportedLanguages: i18nService.getSupportedLanguages()
      });
    }

    const translation = i18nService.translate(key as string, normalizedLang, params);

    return res.json({
      message: 'Translation retrieved successfully',
      data: {
        language: normalizedLang,
        key,
        params: params || {},
        translation
      }
    });
  } catch (error) {
    console.error('Translate key error:', error);
    res.status(500).json({
      error: 'Failed to translate key',
      message: 'Internal server error'
    });
  }
});

export default router;
