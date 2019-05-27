import React from "react";
import { Flex, Text } from "../StyledComponents";

interface TabHeaderProps {
  activeTab: string;
  children: any;
  onClickTabItem: any;
}

export function TabHeader({
  activeTab,
  children,
  onClickTabItem
}: TabHeaderProps) {
  return (
    <Flex justifyContent="center" alignItems="center" width={1}>
      {children.map((child: any, index: number) => {
        const { label } = child.props;
        return (
          <React.Fragment key={index}>
            <Text
              activeTab={activeTab}
              key={label}
              label={label}
              id={label}
              onClick={onClickTabItem}
              color={activeTab === label ? "text" : "#ccc"}
              fontSize={[5, 6]}
              fontWeight={400}
              p={3}
            >
              {label}
            </Text>
            {index % 2 === 0 ? (
              <Text color="#ccc" fontSize={[5]} mx={[2, 7]}>
                |
              </Text>
            ) : (
              <Text />
            )}
          </React.Fragment>
        );
      })}
    </Flex>
  );
}
