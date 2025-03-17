"use client";

import { FC, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StyledBold } from "../../components/common/styled";
import LinkedInLogo from "./images/in-blue.svg";
import {
  Root,
  StyledAuthor,
  StyledAuthorPosition,
  StyledAuthorTitle,
  StyledAuthorWrapper,
  StyledAvatar,
  StyledAvatarWrapper,
  StyledContent,
  StyledHeader,
  StyledSelectedTestimonial,
  StyledTestimonialText,
  StyledTestimonialsWrapper,
  StyledTestimonialWrapper,
  StyledLink,
  StyledLogo,
  StyledControls,
  StyledControl,
  StyledActiveSlide,
  StyledActiveSlideWrapper,
  StyledTotalSlides,
} from "./styled";

const testimonials = [
  {
    id: 1,
    avatar: "/landing/testimonials/frank.png",
    author: "Frank Zehilus",
    position: "CTO @ FitBurn.ai",
    link: "https://www.linkedin.com/in/frank-zehlius-811089133/",
    text: "Relying on Ethberry was the right decision. You can tell they know every corner of the industry they’re working in. Their expertise, attention to detail, and commitment to delivering a high-quality product were evident throughout the project. As their client, we appreciated their responsible approach — the end product was delivered by EthBerry following the deadline, well-timed. \n\n The application exceeded our expectations in both appearance and functionality and gain overwhelmingly positive feedback from the auditors.",
  },
  {
    id: 2,
    avatar: "/landing/testimonials/chris.png",
    author: "Alex Medvediev",
    position: "Senior Account Executive @ Unicsoft",
    link: "https://www.linkedin.com/in/alexmedvediev/",
    text: "I have had the pleasure of working alongside Oleg, and I cannot recommend him highly enough. His ability to extract project details from clients is unmatched, and he possesses an exceptional talent for simplifying complex technical concepts and communicating them in layman's terms. Furthermore, Oleg's meticulous attention to detail, and tenacious drive to see tasks through to completion are truly remarkable. Any startup would be fortunate to have Oleg on board",
  },
  {
    id: 3,
    avatar: "/landing/testimonials/alex.png",
    author: "Alex Ruzh",
    position: "Chief Executive Officer @ memoryOS",
    link: "https://www.linkedin.com/in/alexruzh/",
    text: "Working with our former CTO was invaluable. His contributions to our memory extension project were instrumental in its success, leading to a remarkable fundraising journey of $650k on Kickstarter and an additional $3 million from VCs. The solid architecture he implemented has allowed our project to thrive seamlessly, even in his absence, for years without encountering any issues. His expertise and dedication were integral to achieving our goals.",
  },
  {
    id: 4,
    avatar: "/landing/testimonials/olga.png",
    author: "Olga Kotlamina",
    position: "Director of Software Engineering @ Unicsoft",
    link: "https://www.linkedin.com/in/olga-kotlamina-ba1b9a17/",
    text: "Oleg's expertise as a Solution Architect at Unicsoft was truly remarkable. His role in presales was invaluable, adeptly gathering technical requirements and producing SRS documentation for over 100 projects. Oleg's ability to develop initial technical visions was exceptional, covering a wide range of projects from designing NFT stores to complex blockchain initiatives like exchanges, cross-chain bridges, and gamified projects. His contributions consistently exceeded expectations, showcasing his proficiency and dedication in every endeavor.",
  },
  {
    id: 4,
    avatar: "/landing/testimonials/yura.png",
    author: "Yury Toporov",
    position: "CFO @ Gemunion",
    link: "https://www.linkedin.com/in/yury-toporov",
    text: "I had the pleasure of working with Oleg for four years, and I am truly regretful that this project has come to an end. Oleg is an exceptional technical leader who consistently demonstrated a keen eye for detail and a deep understanding of our technological needs. His ability to lead by example inspired the entire team, driving us to achieve remarkable results. Oleg's dedication and expertise were instrumental in our success, and I am confident that he will continue to excel in any future endeavors.",
  },
  {
    id: 4,
    avatar: "/landing/testimonials/dima.png",
    author: "Dimitri Sloboda",
    position: "Founder and CEO @ CoArt",
    link: "https://www.linkedin.com/in/olga-kotlamina-ba1b9a17/",
    text: "Oleg manages the technical team for our project so exceptionally well that we would be thrilled to see him as a co-founder in the next phase of scaling our project. His expertise, leadership, and ability to deliver results make him an invaluable asset to any team",
  },
  {
    id: 4,
    avatar: "/landing/testimonials/stan.png",
    author: "Stanislav Kondratov",
    position: "CEO @ TheLAMB",
    link: "#",
    text: "I want to express my heartfelt gratitude for the incredible work you've done in developing our blockchain protocol. Your team's expertise and dedication have been nothing short of outstanding. The effort you've put into this project has not only met but surpassed our expectations, and it's clear that your innovative approach has set a strong foundation for our platform's success.",
  },
];

export const Testimonials: FC = () => {
  const [show, setShow] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1200);
  }, []);

  const settings = {
    arrows: false,
    centerMode: true,
    centerPadding: "220px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current: number) => {
      setActiveSlide(current);
    },
    responsive: [
      {
        breakpoint: 2220,
        settings: {
          centerPadding: "580px",
        },
      },
      {
        breakpoint: 1920,
        settings: {
          centerPadding: "330px",
        },
      },
      {
        breakpoint: 1450,
        settings: {
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Root show={show}>
      <StyledHeader>
        <FormattedMessage
          id="pages.landing.testimonials.title"
          values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold> }}
        />
      </StyledHeader>

      <StyledTestimonialsWrapper>
        <Slider
          {...settings}
          className="testimonials-slider"
          ref={(ref: any) => {
            sliderRef.current = ref;
          }}
        >
          {testimonials.map(testimonial => {
            return (
              <StyledTestimonialWrapper key={testimonial.id}>
                <StyledSelectedTestimonial>
                  <StyledAvatarWrapper>
                    <StyledAvatar component="img" src={testimonial.avatar} alt={testimonial.author} />
                  </StyledAvatarWrapper>
                  <StyledContent>
                    <StyledAuthorWrapper>
                      <StyledAuthor>
                        <StyledAuthorTitle>{testimonial.author}</StyledAuthorTitle>
                        <StyledAuthorPosition>{testimonial.position}</StyledAuthorPosition>
                      </StyledAuthor>
                    </StyledAuthorWrapper>
                    <StyledTestimonialText>{testimonial.text}</StyledTestimonialText>
                    <StyledTestimonialText>
                      <StyledLink href={testimonial.link} target="_blank" rel="noopener noreferrer">
                        <StyledLogo component={LinkedInLogo} viewBox="0 0 30 30" />
                      </StyledLink>
                    </StyledTestimonialText>
                  </StyledContent>
                </StyledSelectedTestimonial>
              </StyledTestimonialWrapper>
            );
          })}
        </Slider>
      </StyledTestimonialsWrapper>
      <StyledControls>
        <StyledControl onClick={() => sliderRef.current?.slickPrev()}>
          <ChevronLeft />
        </StyledControl>
        <StyledControl onClick={() => sliderRef.current?.slickNext()}>
          <ChevronRight />
        </StyledControl>
        <StyledActiveSlideWrapper>
          <StyledActiveSlide>{activeSlide + 1}</StyledActiveSlide>
          {" / "}
          <StyledTotalSlides>{testimonials.length}</StyledTotalSlides>
        </StyledActiveSlideWrapper>
      </StyledControls>
    </Root>
  );
};
