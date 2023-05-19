import { defineConfig } from "tinacms";
import { pagesFields } from "./templates";
import { postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

import { defineSchema, defineConfig } from 'tinacms'





export default defineConfig({
  branch,
  clientId: process.env.CLIENTID!, // Get this from tina.io
  token: process.env.TOKEN!, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "imgs",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages en espagnol",
        name: "pages_en_espagnol",
        path: "es",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            templates: [
              {
                name: 'respiration',
                label: 'Respiration',
                match: {
                  start: '{% include',
                  name: 'respiration.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertions",
                    type: "boolean",
                  },
                ],
              },
              {
                name: 'endofpost',
                label: 'Fin du post',
                match: {
                  start: '{% include',
                  name: 'end-post.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertend",
                    type: "boolean",
                  },
                ],
              },
              {
                name: 'separation',
                label: 'Séparation',
                match: {
                  start: '{% include',
                  name: 'separation.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertseparation",
                    type: "string",
                  },
                ],
              },
              {
                name: 'vimeo',
                label: 'Vimeo',
                match: {
                  start: '{% include',
                  name: 'vimeo.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id video Vimeo',
                    name:"id",
                    type: "string",
                  },
                ],
              },
              {
                name: 'youtube',
                label: 'Youtube',
                match: {
                  start: '{% include',
                  name: 'youtube.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id video Youtube',
                    name:"id",
                    type: "string",
                  },
                ],
              },
              {
                name: 'soundcloud',
                label: 'Soundcloud',
                match: {
                  start: '{% include',
                  name: 'soundcloud.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id audio Soundcloud',
                    name:"id",
                    type: "string",
                  },
                ],
              }
            ],
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Posts en espagnol",
        name: "posts_en_espagnol",
        path: "es/_posts",
        ui: {
          filename: {
            readonly: true,
            slugify: values => {
              const date = new Date();
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
        
              let currentDate = `${year}-${month}-${day}`;
        
              return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`            },
          },
        },
        defaultItem: () => {
          return {
            layout: 'post',
            lang: 'es'
          }
        },
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            templates: [
              {
                name: 'respiration',
                label: 'Respiration',
                match: {
                  start: '{% include',
                  name: 'respiration.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertions",
                    type: "boolean",
                  },
                ],
              },
              {
                name: 'endofpost',
                label: 'Fin du post',
                match: {
                  start: '{% include',
                  name: 'end-post.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertend",
                    type: "boolean",
                  },
                ],
              },
              {
                name: 'separation',
                label: 'Séparation',
                match: {
                  start: '{% include',
                  name: 'separation.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertseparation",
                    type: "string",
                  },
                ],
              },
              {
                name: 'vimeo',
                label: 'Vimeo',
                match: {
                  start: '{% include',
                  name: 'vimeo.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id video Vimeo',
                    name:"id",
                    type: "string",
                  },
                ],
              },
              {
                name: 'youtube',
                label: 'Youtube',
                match: {
                  start: '{% include',
                  name: 'youtube.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id video Youtube',
                    name:"id",
                    type: "string",
                  },
                ],
              },
              {
                name: 'soundcloud',
                label: 'Soundcloud',
                match: {
                  start: '{% include',
                  name: 'soundcloud.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id audio Soundcloud',
                    name:"id",
                    type: "string",
                  },
                ],
              }
            ],
            
          },
          ...postFields(),
        ],
      },
      {
        format: "md",
        label: "Pages en français",
        name: "pages_en_fran_ais",
        path: "fr",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            templates: [
              {
                name: 'respiration',
                label: 'Respiration',
                match: {
                  start: '{% include',
                  name: 'respiration.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertions",
                    type: "boolean",
                  },
                ],
              },
              {
                name: 'endofpost',
                label: 'Fin du post',
                match: {
                  start: '{% include',
                  name: 'end-post.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertend",
                    type: "boolean",
                  },
                ],
              },
              {
                name: 'separation',
                label: 'Séparation',
                match: {
                  start: '{% include',
                  name: 'separation.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertseparation",
                    type: "string",
                  },
                ],
              },
              {
                name: 'vimeo',
                label: 'Vimeo',
                match: {
                  start: '{% include',
                  name: 'vimeo.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id video Vimeo',
                    name:"id",
                    type: "string",
                  },
                ],
              },
              {
                name: 'youtube',
                label: 'Youtube',
                match: {
                  start: '{% include',
                  name: 'youtube.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id video Youtube',
                    name:"id",
                    type: "string",
                  },
                ],
              },
              {
                name: 'soundcloud',
                label: 'Soundcloud',
                match: {
                  start: '{% include',
                  name: 'soundcloud.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id audio Soundcloud',
                    name:"id",
                    type: "string",
                  },
                ],
              }
            ],
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Posts en français",
        name: "posts_en_fran_ais",
        path: "fr/_posts",
        ui: {
          filename: {
            readonly: true,
            slugify: values => {
              const date = new Date();
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
        
              let currentDate = `${year}-${month}-${day}`;
        
              return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`            },
          },
        },
        defaultItem: () => {
          return {
            layout: 'post',
            lang: 'fr'
          }
        },
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            templates: [
              {
                name: 'respiration',
                label: 'Respiration',
                match: {
                  start: '{% include',
                  name: 'respiration.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertions",
                    type: "boolean",
                  },
                ],
              },
              {
                name: 'endofpost',
                label: 'Fin du post',
                match: {
                  start: '{% include',
                  name: 'end-post.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertend",
                    type: "boolean",
                  },
                ],
              },
              {
                name: 'separation',
                label: 'Séparation',
                match: {
                  start: '{% include',
                  name: 'separation.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'insertions',
                    name:"insertseparation",
                    type: "string",
                  },
                ],
              },
              {
                name: 'vimeo',
                label: 'Vimeo',
                match: {
                  start: '{% include',
                  name: 'vimeo.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id video Vimeo',
                    name:"id",
                    type: "string",
                  },
                ],
              },
              {
                name: 'youtube',
                label: 'Youtube',
                match: {
                  start: '{% include',
                  name: 'youtube.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id video Youtube',
                    name:"id",
                    type: "string",
                  },
                ],
              },
              {
                name: 'soundcloud',
                label: 'Soundcloud',
                match: {
                  start: '{% include',
                  name: 'soundcloud.html',
                  end: '%}',
                },
                fields: [
                  {
                    label: 'Id audio Soundcloud',
                    name:"id",
                    type: "string",
                  },
                ],
              }
            ],
          },
          ...postFields(),
        ],
      },
    ],
  },
});
