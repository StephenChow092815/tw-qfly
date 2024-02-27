
# 推特工具

快速生成推文/转推/关注链接，复制链接手动打开浏览器

## 安装:

```
npm install --global tw-qfly
```

## 用法:

### 1.发推:

```
tw-qfly tweet
```
随机生成推文，并生成url地址，复制地址后网页打开则自动生成推文草稿


### 2.转推:

```
tw-qfly retweet tweet_id
```

tweet_id为推文对应的id，tweet_id必须

### 3.关注:

```
tw-qfly follow tweet_name
```
tweet_name为被关注者@唯一标识，tweet_name为被关注者必须
