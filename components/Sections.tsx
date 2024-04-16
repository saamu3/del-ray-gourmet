import { Image, Text, View, useWindowDimensions } from "react-native";
import SectionList from "react-native-tabs-section-list/lib/SectionList";
import { TMenuItems } from "../_Types_/StaticDataType";
import style from "../styles/style";
export default function Sections({
  Data,
}: {
  Data: TMenuItems[];
}): React.JSX.Element {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={style.sectionContainer}>
      <SectionList
        sections={Data}
        keyExtractor={(item) => item.name}
        stickySectionHeadersEnabled={false}
        scrollToLocationOffset={10}
        tabBarStyle={style.tabBar}
        ItemSeparatorComponent={() => <View style={style.itemSeparator} />}
        SectionSeparatorComponent={() => (
          <View style={style.sectionSeparator} />
        )}
        renderTab={({ title, isActive }) => (
          <View
            style={[
              style.tabContainer,
              { borderBottomWidth: isActive ? 2 : 0 },
            ]}
          >
            <Text
              style={[
                style.tabText,
                {
                  color: isActive ? "rgb(248, 113, 113)" : "black",
                  backgroundColor: isActive ? "rgb(255,235,224)" : "white",
                },
              ]}
            >
              {title}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={style.header}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={style.item}>
            {item.image && (
              <Image
                testID="Appetizers"
                source={item.image}
                style={[
                  style.itemImage,
                  {
                    height: windowHeight > 700 ? "100%" : "50%",
                    width: windowWidth > 500 ? "70%" : "50%",
                  },
                ]}
                resizeMode="cover"
              />
            )}
            {item.sticker && (
              <Image
                style={style.sticker}
                source={item.sticker}
                testID="sticker"
              />
            )}

            <View style={{ flexShrink: 1 }}>
              <Text style={style.itemName}>{item.name}</Text>
              {item.description && (
                <Text style={style.description}>{item.description}</Text>
              )}
              {item.additional_information && (
                <Text style={style.additional_information}>
                  {item.additional_information}
                </Text>
              )}
              <Text style={style.additional_items}>
                {item.additional_items}
              </Text>
            </View>
            <View>
              <Text style={style.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
