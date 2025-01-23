interface PortfolioItem {
  id: number;
  title: {
    en: string;
    uz: string;
    ru: string;
  };
  subtitle: {
    en: string;
    uz: string;
    ru: string;
  };
  type: string;
  image: string;
  large: boolean;
}

type PortfolioData = {
  portfolio_data: PortfolioItem[];
};
