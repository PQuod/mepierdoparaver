import type { TinaField } from "tinacms";

export function pagesFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "Titre",
      required: true,
    },
    {
      type: "string",
      name: "lang",
      label: "Langue",
      options: ["fr", "es"],
    },
    {
      type: "string",
      name: "lang_ref",
      nameOverride: "lang-ref",
      label: "Titre commun aux deux langues",
      required: true,
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Titre",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "lang",
      label: "Langue",
      options: ["fr", "es"],
      required: true,
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "lang_ref",
      nameOverride: "lang-ref",
      label: "Titre commun aux deux langues",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "categories",
      label: "Médiums",
      list: true,
      options: ["son", "divers", "volume", "dessin", "video", "edition"],
    },
  ] as TinaField[];
}
