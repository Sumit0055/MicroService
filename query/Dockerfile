# yah alpine image se ek container banayega jisme node.js installed hoga.
FROM node:alpine

# yah app ke andar ek directory banayega jiska naam app hoga
WORKDIR /app

# Yah Packegage json ke sab dependinesh ko install karne ke liye npm install chalane ke liye hai
COPY package*.json .

# joh bhi package.json me dependencies hai wo sab install ho jayenge is command se
RUN npm install

# Sab code ko copy kar ke app me dal rhe hai taaki npm install chalane ke baad sab dependencies install ho jaye
COPY . . 
# expose kar raha hai taaki hum is port pe apne app ko access kar sake
CMD ["npm", "start"]