import { Button, Heading, Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import React, { useState } from "react";

const Index = () => {
  const [isOpen, setState] = useState(false);
  const handleClick = () => {
    setState(true);
  };

  const handleSelected = (list) => {
    console.log("Function: handleClick, : ", list);
    setState(false);
  };

  return (
    <Page title="Test">
      <Heading element={"h1"}>Shopify app with Node and React TTT! 🎉</Heading>
      <Button primary={true} onClick={handleClick}>
        TRY
      </Button>
      <ResourcePicker
        onCancel={() => setState(false)}
        onSelection={handleSelected}
        open={isOpen}
        resourceType={"Product"}
      />
    </Page>
  );
};

export default Index;
