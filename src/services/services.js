import Axios from "axios";

const endPoint = "https://email-form.cmdev.cc/api/";

export const signUp = async (data) => {
  try {
    const response = await Axios.post(endPoint + "auth/signUp", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await Axios.post(endPoint + "auth/login", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const profile = async () => {
  try {
    const response = await Axios.get(endPoint + "auth/whoAmI");
    return response;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (data) => {
  try {
    const response = await Axios.post(endPoint + "auth/changePassword", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCredentials = async () => {
  try {
    const response = await Axios.get(endPoint + "marketoCredentials");
    return response;
  } catch (error) {
    throw error;
  }
};

export const createCredentials = async (data) => {
  try {
    const response = await Axios.post(endPoint + "marketoCredentials", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateCredentials = async (id, data) => {
  try {
    const response = await Axios.put(
      `${endPoint}marketoCredentials/${id}`,
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteCredentials = async (id) => {
  try {
    const response = await Axios.delete(`${endPoint}marketoCredentials/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSessions = async () => {
  try {
    const response = await Axios.get(endPoint + "session");
    return response;
  } catch (error) {
    throw error;
  }
};
