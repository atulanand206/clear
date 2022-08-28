FROM node:14-alpine

WORKDIR /

ENV PATH /node_modules/.bin:$PATH
ENV TOOL_NODE_FLAGS=--max_old_space_size=4096

COPY package.json ./
COPY yarn.lock ./
RUN yarn install
EXPOSE 3000
COPY . ./

CMD ["yarn", "start"]