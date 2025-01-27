import classes from "./GridCard.module.css";
import {
  FcAreaChart,
  FcBusinessman,
  FcPieChart,
  FcSettings,
} from "react-icons/fc";
import { AiOutlineSetting } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import React from "react";
import { useRouter } from "next/router";
import { Button, Dialog, DialogContent, Modal } from "@material-ui/core";
import { Box } from "@mui/system";
import { MdOutlineHistory } from "react-icons/md";
import { RiEyeLine } from "react-icons/ri";

const GridCard = () => {
  const [modal, setModal] = React.useState(false);
  const cardContent = [
    {
      icon: <FcBusinessman />,
      title: "Account Info",
      details:
        "See your profile data and manage your Account to choose what is saved with us.",
      linkText: "View",
      linkIcon: <RiEyeLine />,
      link: "/dashboard/profile",
    },
    {
      icon: <FcSettings />,
      title: "Settings",
      details:
        "You have full control to manage your own account and keep account fully secure.",
      linkText: "Account Settings",
      linkIcon: <AiOutlineSetting />,
      link: "/dashboard/profile/change-password",
    },

    {
      icon: <FcAreaChart />,
      title: "Tax Details",
      details:
        "Check out all your slated revenues. You can also generate pins for your revenues.",
      linkText: "Details",
      linkIcon: <BiMessageSquareDetail />,
      link: "/dashboard/all-revenues",
    },

    {
      icon: <FcPieChart />,
      title: "History",
      details:
        "Check your history on transactions and manage your packages that you have.",
      linkText: "Details",
      linkIcon: <MdOutlineHistory />,
      link: "", //"/dashboard/transaction-history",
    },
  ];
  const router = useRouter();
  return (
    <div className={classes.card_container}>
      {modal && (
        <Modal open={modal}>
          <Dialog open={modal}>
            <DialogContent>
              This feature is coming soon
              <Box alignItems="center" justifyContent="center" display="flex">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setModal(false)}
                >
                  Got it
                </Button>
              </Box>
            </DialogContent>
          </Dialog>
        </Modal>
      )}
      {React.Children.toArray(
        cardContent.map((card) => {
          return (
            <div
              onClick={() => {
                card.link ? router.push(card.link) : setModal(true);
              }}
              key={card.title}
              className={classes.card}
            >
              <div className={classes.cardMain}>
                <div className={classes.icon}>{card.icon}</div>
                <div className={classes.title}>{card.title}</div>
                <div style={{ textAlign: "center" }}>{card.details}</div>
              </div>
              <Box
                display="flex"
                borderTop="solid 1px #f2f4f4"
                className={classes.cardBottom}
                alignItems="center"
                gap="10px"
              >
                <Box
                  display="flex"
                  color="#329A92"
                  alignItems="center"
                  justifyContent="center"
                >
                  {card.linkIcon}
                </Box>
                <div style={{ color: "#BB4077" }}>{card.linkText}</div>
              </Box>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GridCard;
