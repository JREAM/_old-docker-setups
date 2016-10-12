FROM risingstack/alpine:3.4-v6.3.0-3.6.2

ENV NODE_ENV development
ENV PORT 80

# Set registry to avoid https issues
RUN npm config set registry http://registry.npmjs.org/

# Install the base packages
RUN npm install

WORKDIR /app

# Cache app dependencies
COPY package.json package.json

# Bundle App Source
COPY . .

# Install Express Items
CMD cd server && npm install --no-optional

# Expose our Port
EXPOSE 80

# Run the Server
CMD node server/app.js
