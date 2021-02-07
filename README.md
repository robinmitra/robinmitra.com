# Robin's personal website

## 🚀 Quick start

### Start developing

Set up the following environment variables in a file named `.env.development`:

* `GITHUB_TOKEN`
* `STEAM_KEY`
* `STEAM_USER_ID`

Start the development server:

```shell
npm run develop
```

The site is now running at `http://localhost:8000`!

_Note: This also starts a GraphQL server at _`http://localhost:8000/___graphql`_. It can be used to experiment with querying the site data._

### Deploy

Any changes made on the `main` branch are automatically deployed to [Vercel](https://vercel.com).