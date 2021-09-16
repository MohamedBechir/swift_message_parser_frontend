export const MESSAGE_ENDPOINTS = {
  messages: `http://localhost:8080/messages/decomposedMessages`,
  message: `http://localhost:8080/messages`,
  message_details: `http://localhost:8080/messages/decomposedMessages`,
};

export const FILE_ENDPOINTS = {
  upload_file: `http://localhost:8080/messages`,
};

export const JSONMESSAGE_ENDPOINTS = {
  json_messages: `http://localhost:8080/messages/tojson`,
  send_json_message: `http://localhost:8080/messages/json/send`,
};

export const XMLMESSAGE_ENDPOINTS = {
  xml_messages: `http://localhost:8080/messages/toxml`,
  send_xml_message: `http://localhost:8080/messages/xml/send`,
};
