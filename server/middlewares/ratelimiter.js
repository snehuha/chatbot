import ratelimit from 'express-rate-limit';

export const rateLimiter = ratelimit({
  windowMs: 1 * 60 * 1000,
  max: 5, 
  message: {
    error: "Too many AI requests. Please slow down and comeback in a minute"
  },
  standardHeaders: true,
  legacyHeaders: false,
});