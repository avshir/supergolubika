export interface ITestimonial {
  id: number;
  text: string;
  author: string;
}

export const testimonials: ITestimonial[] = [
  {
    id: 1,
    text: "Ммм! Такая крупная и сладкая голубика! Нашим детям точно понравится!",
    author: "Павел",
  },
  {
    id: 2,
    text: "Очень вкусная голубика, как-будто у бабушки с куста! Здорово, что вы сами ее выращиваете. Обязательно заедем вновь!",
    author: "Анна",
  },
  {
    id: 3,
    text: "Ягоды очень сочные! Особенно нравится, что здесь же вы их и выращиваете.",
    author: "Марина",
  },
];
