FROM node:16.14.0-slim

USER node

WORKDIR /home/node/app

CMD ["sh", "-c", "yarn install && tail -f /dev/null"]
