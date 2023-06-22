type LanguageProps = {
    language: string
    hour: number
}

export const getGreeting = (language: string) => {

    const currentHour = new Date().getHours();
    const data: LanguageProps = {
        language: language,
        hour: currentHour
    }

    if (currentHour >= 5 && currentHour < 12) {
      return `${data.language === "Indonesia" ? "Selamat Pagi" : "Good Morning"}`;
    } else if (currentHour >= 12 && currentHour < 15) {
      return `${data.language === "Indonesia" ? "Selamat Siang" : "Good Afternoon"}`;
    } else if (currentHour > 15 && currentHour < 18) {
      return `${data.language === "Indonesia" ? "Selamat Sore" : "Good Evening"}`;
    } else {
      return `${data.language === "Indonesia" ? "Selamat Malam" : "Good Night"}`;
    }
  }