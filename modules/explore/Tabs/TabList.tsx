import { OlStyled } from "../StyledComponents";
import Tab from "./Tab";

interface TabListProps {
  activeTab: string;
  children: any;
  onClickTabItem: any;
}

export const TabList = ({
  activeTab,
  children,
  onClickTabItem
}: TabListProps) => {
  return (
    <OlStyled>
      {children.map((child: any) => {
        const { label } = child.props;

        return (
          <Tab
            activeTab={activeTab}
            key={label}
            label={label}
            onClick={onClickTabItem}
          />
        );
      })}
    </OlStyled>
  );
};
