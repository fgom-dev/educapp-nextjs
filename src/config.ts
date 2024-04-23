export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: 'price_1P6cGvDZYCXXMmeEFeuuLHC8',
        quota: {
          TASKS: 5,
        }
      },
      pro: {
        priceId: 'price_1P6cHGDZYCXXMmeEeX1698UO',
        quota: {
          TASKS: 100,
        }
      },
    }
  }
}