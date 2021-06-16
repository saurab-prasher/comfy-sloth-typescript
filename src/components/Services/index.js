import React from "react";

import {
  ServicesContainer,
  ServicesInner,
  ServicesHeader,
  ServicesH2,
  ServicesP,
  ServicesCard,
  ServicesCardContainer,
  IconContainer,
  Icon,
  CardHeading,
  CardDescription,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesInner>
        <ServicesHeader>
          <ServicesH2>Custom Furniture Built Only for you</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            harum. Temporibus quos exercitationem veritatis ab distinctio esse
            quidem suscipit dignissimos.
          </ServicesP>
        </ServicesHeader>
        <ServicesCardContainer>
          <ServicesCard>
            <IconContainer>
              <Icon />
            </IconContainer>
            <CardHeading>Mission</CardHeading>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur et consequatur nisi sapiente at temporibus possimus
              aperiam optio omnis adipisci!
            </CardDescription>
          </ServicesCard>
          <ServicesCard>
            <IconContainer>
              <Icon />
            </IconContainer>
            <CardHeading>Vision</CardHeading>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur et consequatur nisi sapiente at temporibus possimus
              aperiam optio omnis adipisci!
            </CardDescription>
          </ServicesCard>
          <ServicesCard>
            <IconContainer>
              <Icon />
            </IconContainer>
            <CardHeading>History</CardHeading>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur et consequatur nisi sapiente at temporibus possimus
              aperiam optio omnis adipisci!
            </CardDescription>
          </ServicesCard>
        </ServicesCardContainer>
      </ServicesInner>
    </ServicesContainer>
  );
};

export default Services;
