"use client";

import { FC, useState } from "react";
import { ListItemText, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { Root } from "../components/common/styled";
import { locations } from "./data";
import { LocationsMap } from "./map";
import { StyledLayout, StyledList, StyledListItem } from "./styled";

export const LocationsContent: FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <Root>
      <Typography
        component="h2"
        sx={[
          theme => ({
            ...theme.typography.h4,
            lineHeight: "52px",
          }),
        ]}
      >
        <FormattedMessage id="pages.locations.title" />
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <FormattedMessage id="pages.locations.description" />
      </Typography>
      <StyledLayout>
        <LocationsMap locations={locations} selectedId={selectedId} onSelect={setSelectedId} />
        <StyledList>
          {locations.map(location => (
            <StyledListItem
              key={location.id}
              selected={selectedId === location.id}
              onClick={() => setSelectedId(location.id)}
            >
              <ListItemText primary={location.name} secondary={location.country} />
            </StyledListItem>
          ))}
        </StyledList>
      </StyledLayout>
    </Root>
  );
};
