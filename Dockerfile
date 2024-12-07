FROM node:18-alpine 
# Uncomment the line above if you want to use a Dockerfile instead of templateId


RUN apk update && apk upgrade && \
    apk add --no-cache git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./ /usr/src/app/
RUN npm ci
#run --production && npm cache clean --force
#COPY ./ /usr/src/app
RUN npm run build



WORKDIR /usr/src/app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

USER nextjs

ENV PORT=3000
EXPOSE 3000

CMD [ "npm", "run", "start"]
# , "--", "-H", "0.0.0.0", "-p", "80" ]


# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
# ENV HOSTNAME="0.0.0.0"
# CMD ["node", "server.js"]
