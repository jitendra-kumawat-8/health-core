import React from "react";
import { Box, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TEAM_MEMBERS } from "./constants";

const TeamCarousel: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        "& .swiper": {
          px: { xs: 0.5, md: 1 },
          pb: 6,
        },
        "& .swiper-pagination": {
          bottom: "0px !important",
        },
        "& .swiper-pagination-bullet": {
          width: 10,
          height: 10,
          backgroundColor: "#B8D4DA",
          opacity: 1,
          transition: "all 0.3s ease",
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "#1F7A8C",
          width: 28,
          borderRadius: "5px",
        },
        "& .team-nav-btn": {
          position: "absolute",
          top: "40%",
          zIndex: 10,
          width: 44,
          height: 44,
          borderRadius: "50%",
          bgcolor: "background.paper",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
          color: "text.primary",
          "&:hover": {
            bgcolor: "primary.main",
            color: "white",
            boxShadow: "0 4px 16px rgba(31, 122, 140, 0.3)",
          },
        },
      }}
    >
      <Box className="team-nav-btn team-prev" sx={{ left: { md: -8, lg: -22 } }}>
        <ChevronLeft />
      </Box>
      <Box className="team-nav-btn team-next" sx={{ right: { md: -8, lg: -22 } }}>
        <ChevronRight />
      </Box>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1.15}
        centeredSlides={false}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".team-prev",
          nextEl: ".team-next",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          600: { slidesPerView: 2.2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
        }}
      >
        {TEAM_MEMBERS.map((member) => (
          <SwiperSlide key={member.id}>
            <Box
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid",
                borderColor: "grey.200",
                backgroundColor: "background.paper",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(31, 122, 140, 0.12)",
                  "& .member-image": {
                    transform: "scale(1.05)",
                  },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 280,
                  overflow: "hidden",
                  backgroundColor: "grey.100",
                }}
              >
                <Image
                  className="member-image"
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                    transition: "transform 0.4s ease",
                  }}
                  sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 33vw"
                />
              </Box>

              <Box
                sx={{
                  p: 3,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    fontSize: "1.1rem",
                    mb: 0.5,
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    mb: 1.5,
                    lineHeight: 1.4,
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                    fontSize: "0.85rem",
                  }}
                >
                  {member.description}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TeamCarousel;
