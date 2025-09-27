  import axios from "axios";

  // Axios örneği oluşturabiliriz (opsiyonel, baseURL vs için)
  const api = axios.create({
    baseURL: "/api",
    timeout: 50000, // 50 saniye
  });

  // Tüm partnerleri listele
  export const getPartners = async (page = 1, limit = 5) => {
    try {
      const response = await api.get("/partners", {
        params: { page, limit },
      });

      const data = response.data;

      // API beklenen formatta değilse boş dizi dön
      if (!data || !Array.isArray(data.rows)) {
        console.warn("⚠️ API'den beklenen format gelmedi:", data);
        return [];
      }

      return data.rows;
    } catch (err) {
      handleAxiosError(err);
      return [];
    }
  };

  /* Tek partner detayı al*/

  export const getPartner = async (id) => {
    try {
      const response = await api.get(`/partners/${id}`);
      return response.data || null;
    } catch (err) {
      handleAxiosError(err);
      return null;
    }
  };


  /* Axios hatalarını merkezi şekilde yönet */
  const handleAxiosError = (err) => {
    if (err.response) {
      console.error(
        `API hatası (status ${err.response.status}):`,
        err.response.data
      );
    } else if (err.request) {
      console.error("API isteği yapıldı ama cevap gelmedi:", err.message);
    } else {
      console.error("Axios hatası:", err.message);
    }
  };

