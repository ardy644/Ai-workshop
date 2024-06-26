import axios from "axios";
import { PROFILE_PICTURES_GET_ERROR_ALERT } from "../../../../../../../../../constants/alerts_constants";
import { getProfilePictures } from "../../../../../../../../../controllers/API";
import { useTranslation } from "react-i18next";

const useGetProfilePictures = (setErrorData) => {
  const { t } = useTranslation();
  const handleGetProfilePictures = async () => {
    try {
      const profilePictures = await getProfilePictures();
      return profilePictures!.files;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn("Request canceled: ", error.message);
      } else {
        setErrorData({
          title: t(PROFILE_PICTURES_GET_ERROR_ALERT),
          list: [(error as any)?.response?.data?.detail],
        });
      }
    }
  };

  return { handleGetProfilePictures };
};

export default useGetProfilePictures;
