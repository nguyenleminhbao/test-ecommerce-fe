FROM node
WORKDIR /test-ecommerce-fe
COPY package*.json ./
RUN npm install
COPY . . 
ENV NODE_OPTIONS=--max_old_space_size=4096
#RUN npm run build
EXPOSE 5173 
CMD ["npm", "run", "dev"]
