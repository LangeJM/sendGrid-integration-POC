import axios from "axios";

const BASE_URL = "https://api.sendgrid.com/v3";
const TOKEN = process.env.REACT_APP_SENDGRID_API_KEY;
const templatesURL =
  "/templates?page_size=10&generations=legacy&generations=dynamic";
const templateURL = "/templates/";

const AUTH_HEADER = {
  headers: { Authorization: `Bearer ${TOKEN}` },
};

// const bodyParameters = {
//   key: "value",s
// };

// export const getEmailTemplates = async () => {
//   const res = await axios.get(`${BASE_URL}${templatesURL}`, AUTH_HEADER);
//   return res;
// };

export const getEmailTemplates = async () => {
  return await axios.get(`${BASE_URL}${templatesURL}`, AUTH_HEADER);
};

export const getTemplateHtml = async (templateId) => {
  return await axios.get(`${BASE_URL}${templateURL}${templateId}`, AUTH_HEADER);
};
