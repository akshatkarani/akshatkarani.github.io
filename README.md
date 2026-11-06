# akshatkarani.github.io

Source for [akshatkarani.github.io](https://akshatkarani.github.io). It is a plain Jekyll site with no theme and no
JavaScript, built and deployed by GitHub Pages from the `master` branch.

## Layout

| Path                    | What it is                                         |
| ----------------------- | -------------------------------------------------- |
| `index.html`            | Home page: intro, links, list of posts             |
| `_posts/`               | Blog posts (Markdown)                              |
| `_layouts/`, `_includes/` | Page templates                                   |
| `assets/css/main.css`   | All styles (light + dark via `prefers-color-scheme`) |
| `resume.pdf`            | Resume, linked from the nav and home page          |
| `_config.yml`           | Site metadata and contact links                    |

## Writing a post

Create `_posts/YYYY-MM-DD-slug.md`:

```markdown
---
title: "Post title"
description: "One-sentence summary, used for previews and SEO."
---

Post body…
```

Posts appear on the home page automatically. Posts tagged `GSoC` are grouped under the GSoC 2019 series.

## Running locally

With Ruby installed:

```sh
bundle install
bundle exec jekyll serve --livereload
```

Or with Docker:

```sh
docker run --rm -it -p 4000:4000 -v "$PWD":/srv/jekyll -w /srv/jekyll ruby:3.3 \
  sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

Then open <http://localhost:4000>.
