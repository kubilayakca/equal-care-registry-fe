import format from 'string-format';
import qs from 'qs';
import statics from '../statics.json';

const headers = {
  'Content-Type': 'application/json',
  'api-key': '6Le8fgs_111fdE9fgd546rfd456ertgMK0ayZGse_ete_B4KH9Wp7wc',
};

const getURL = (path: string, options: any = {}) => {
  let url: string =
    statics.endpoints[path as keyof typeof statics.endpoints] || '';

  if (options.interpolate) {
    url = format(url, options.interpolate);
  }

  if (options.data) {
    url += `?${qs.stringify(options.data, {
      encode: true,
      indices: false,
      arrayFormat: 'comma',
    })}`;
  }
  return url;
};

export const getBanner = async (language: 'tr' | 'en'): Promise<any> => {
  const url = getURL('GET_BANNER', {
    interpolate: { language, companyId: process.env.NEXT_PUBLIC_COMPANY_ID },
  });

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
      headers,
      next: { revalidate: 60 },
    });

    // network error in the 4xx–5xx range
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    // use response here if we didn't throw above
    return response.json();
  } catch (error: any) {
    throw error?.message;
  }
};

export const submitForm = async (
  token: string,
  { data }: any
): Promise<any> => {
  const url = getURL('SUBMIT_FORM');

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
      method: 'POST',
      headers: { ...headers, ValidationCode: token },
      body: JSON.stringify({
        ...data,
        companyId: process.env.NEXT_PUBLIC_COMPANY_ID,
      }),
    });

    // network error in the 4xx–5xx range
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    if (!responseData.isSucceed) {
      throw new Error(`Form submit failed`);
    }

    // use response here if we didn't throw above
    return responseData;
  } catch (error: any) {
    throw error?.message;
  }
};

export const getNews = async ({ data }: any): Promise<any> => {
  const url = getURL('GET_NEWS', {});

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ...data,
        companyId: process.env.NEXT_PUBLIC_COMPANY_ID,
      }),
    });

    // network error in the 4xx–5xx range
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    // use response here if we didn't throw above
    return response.json();
  } catch (error: any) {
    throw error?.message;
  }
};

export const getNewsBySlug = async (slug: string): Promise<any> => {
  const url = getURL('GET_NEWS_DETAILS', { interpolate: { slug } });

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
      method: 'GET',
      headers,
    });

    // network error in the 4xx–5xx range
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    // use response here if we didn't throw above
    return response.json();
  } catch (error: any) {
    throw error?.message;
  }
};
