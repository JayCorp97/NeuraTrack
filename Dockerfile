# Use an official Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only package files first for layer caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your app's source code
#COPY . .

# Expose the port your app runs on (adjust if not 3000)
EXPOSE 3000

# Use non-root user for better security (optional but recommended)
# RUN useradd -m appuser
# USER appuser

# Command to run your app
CMD ["node", "app.js"]
