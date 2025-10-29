# Environment Configuration

This portfolio uses environment variables for personal information configuration. This allows you to easily customize the portfolio for different users or environments without modifying the source code.

## Setup

1. **Copy the example file:**

   ```bash
   cp env.example .env
   ```

2. **Edit the `.env` file** with your personal information:

   ```env
   # Personal Information
   VITE_PERSONAL_NAME="Your Name"
   VITE_PERSONAL_TITLE="Your Title"
   VITE_PERSONAL_BIO="Your bio description..."
   VITE_PERSONAL_LOCATION="Your Location"

   # Contact Information
   VITE_CONTACT_EMAIL="your.email@example.com"
   VITE_CONTACT_LINKEDIN="https://linkedin.com/in/your-profile"
   VITE_CONTACT_GITHUB="https://github.com/your-username"
   VITE_CONTACT_PHONE="your-phone-number"
   ```

## Environment Variables

### Personal Information

- `VITE_PERSONAL_NAME` - Your full name
- `VITE_PERSONAL_TITLE` - Your professional title
- `VITE_PERSONAL_BIO` - Your bio/description
- `VITE_PERSONAL_LOCATION` - Your location

### Contact Information

- `VITE_CONTACT_EMAIL` - Your email address
- `VITE_CONTACT_LINKEDIN` - Your LinkedIn profile URL
- `VITE_CONTACT_GITHUB` - Your GitHub profile URL
- `VITE_CONTACT_PHONE` - Your phone number

### Application Configuration

- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - Application version
- `VITE_FEATURE_AI_ASSISTANT` - Enable/disable AI assistant (true/false)
- `VITE_FEATURE_ANALYTICS` - Enable/disable analytics (true/false)
- `VITE_FEATURE_DARK_MODE` - Enable/disable dark mode (true/false)

### API Configuration

- `VITE_API_BASE_URL` - API base URL
- `VITE_API_TIMEOUT` - API timeout in milliseconds

### Analytics

- `VITE_ANALYTICS_ENABLED` - Enable analytics (true/false)
- `VITE_ANALYTICS_TRACKING_ID` - Analytics tracking ID

## Usage in Code

The configuration is accessed through the `config` service:

```typescript
import { config } from '@/infrastructure/config/configuration';

// Get personal information
const name = config.getName();
const title = config.getTitle();
const bio = config.getBio();
const location = config.getLocation();

// Get contact information
const email = config.getEmail();
const linkedin = config.getLinkedIn();
const github = config.getGitHub();
const phone = config.getPhone();

// Get full objects
const personalInfo = config.getPersonalInfo();
const contactInfo = config.getContactInfo();
```

## Security Notes

- **Never commit `.env` files** to version control
- **Use `.env.example`** as a template for other developers
- **Environment variables** are prefixed with `VITE_` to be available in the browser
- **Sensitive information** should not be stored in environment variables for client-side applications

## Development vs Production

- **Development**: Uses `.env` file values
- **Production**: Uses environment variables set by your hosting platform
- **Fallbacks**: Default values are provided in the configuration service

## Benefits

1. **Easy Personalization**: Change personal info without code changes
2. **Environment Separation**: Different configs for dev/staging/prod
3. **Security**: Sensitive data not hardcoded in source
4. **Maintainability**: Centralized configuration management
5. **Flexibility**: Easy to customize for different users
