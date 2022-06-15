const useMicrocard = ({ title }) => {
  const api = "https://i.microlink.io/";
  const encodedTitle = encodeURIComponent(title);
  const cardUrl = `https://cards.microlink.io/?preset=paco&title=${encodedTitle}&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F9286706%3Fv%3D4&p=DwMQNgpgHgUABHAzlAvAbzfBcCGYCWA5gHYCSALhALaIBccA5AGaRQC0ExAJgwDRYIARoXoBHAK4QATgE8AdMP7Y4AYwD2YNVLGTZc9ZqlLsABxxcu%2BYiLgA2AAxYAvk5gA%2BLKFYCkqDD4QAK3FEcnwmGQBhNWJKWPoGRDMVCDZBCHIAdwhOPgDcAhIKajpGFmgObgYfFywPZWAAGSsAa3yACykIJhQGdvJyEzoAemGmGPJEOUI1NUJIHBN8KfUqYZVERAAmAH4mHCp8MBkURpxyNVpMwn6AAQBGe3sAbgBmJ%2BeAFg%2BAdg%2BATieADJLEkwDgToJNCoWtVlAgumBeqEZJBEO0cuQ4dhhvVsMAACrQcj5ZDoTDw7DjWIgA5HGT0ABEDDOFz4SBwxEQbEQ0nCjOMlOp5AAyvgAF4Qeh-QXw4UAdQgRH69EB9llygIxAgAAklTdyAkAKxdKh5SkIcpQBL2OD3OA-I0AUmxylqyjxyjQEmk8jC5EgrgawyJUHInrgwFIVBwhAgcFJUhU6B9ek0MycCcpZP8FrgGOVhrtRvV%2BQQmXwXHI7Xo9xLGuwgi0XGkACVzPgQrXHJT3Ti8cBhuBoB5B8OoG4gA&bg=%2318181b`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;
  return image;
};

export { useMicrocard };
