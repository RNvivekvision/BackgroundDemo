import { SectionList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNContainer, RNHeader, RNPlus, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

export default function Home({ navigation }) {
  const onPress = item => {};

  return (
    <RNContainer>
      <RNHeader title={'Home'} back={false} noScroll>
        <SectionList
          sections={generateDynamicData()}
          keyExtractor={(v, i) => String(i)}
          contentContainerStyle={{ paddingBottom: hp(4) }}
          stickySectionHeadersEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => onPress(item)}
              style={styles.renderContainer}>
              <Row title={'Name : '} text={item?.name} />
              <Row title={'Duration : '} text={item?.duration} />
              <Row title={'Start Time : '} text={item?.startTime} />
              <Row title={'End Time : '} text={item?.endTime} />
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => {
            return (
              <View style={styles.header}>
                <RNText>{section?.title}</RNText>
              </View>
            );
          }}
        />
      </RNHeader>
      <RNPlus />
    </RNContainer>
  );
}

const Row = ({ title, text }) => {
  return (
    <View style={RNStyles.flexRow}>
      <RNText size={FontSize.font14} family={FontFamily.Medium}>
        {title}
      </RNText>
      <RNText size={FontSize.font14}>{text}</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(2),
    backgroundColor: Colors.white,
  },
  renderContainer: {
    marginHorizontal: wp(4),
    marginBottom: hp(1.5),
    marginTop: hp(1),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    backgroundColor: Colors.white,
    ...RNStyles.shadow,
    borderRadius: wp(3),
  },
});

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Helper function to generate random times
const generateRandomTime = () => {
  const hour = Math.floor(Math.random() * 8) + 9; // Random hour between 9 AM and 5 PM
  const minute = Math.random() < 0.5 ? '00' : '30'; // Randomly choose :00 or :30
  return `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
};

// Helper function to generate random duration
const generateRandomDuration = () => {
  const hours = Math.floor(Math.random() * 3) + 1; // Random duration between 1 and 3 hours
  const minutes = Math.random() < 0.5 ? '00' : '30'; // Randomly choose 00 or 30 minutes
  return `${hours} hour${hours > 1 ? 's' : ''} ${
    minutes === '30' ? '30 minutes' : ''
  }`;
};

// List of event names to choose from
const eventNames = [
  'Project Kickoff Meeting',
  'Client Presentation',
  'Code Review Session',
  'Team Standup',
  'Lunch with Team',
  'Sprint Planning',
  'UI/UX Workshop',
  'Design Review',
];

const generateEvent = id => {
  const name = eventNames[Math.floor(Math.random() * eventNames.length)];
  const startTime = generateRandomTime();
  const duration = generateRandomDuration();

  // Calculate end time
  const [startHour, startMinutePart] = startTime.split(':');
  let startMinutes = parseInt(startMinutePart, 10);
  let startHourNum = parseInt(startHour, 10);

  // Adjust for AM/PM
  if (startTime.includes('PM') && startHourNum < 12) {
    startHourNum += 12;
  } else if (startTime.includes('AM') && startHourNum === 12) {
    startHourNum = 0; // Midnight case
  }

  const [hours, mins] = duration.split(' ').map(Number); // Extract hours and minutes
  let endHourNum = startHourNum + hours;
  let endMinutes = startMinutes + (mins || 0);

  if (endMinutes >= 60) {
    endHourNum += 1;
    endMinutes -= 60;
  }

  // Format the end time back to a 12-hour format
  const endPeriod = endHourNum >= 12 ? 'PM' : 'AM';
  endHourNum = endHourNum % 12 || 12;
  const endTime = `${endHourNum}:${
    endMinutes === 0 ? '00' : endMinutes
  } ${endPeriod}`;

  return {
    id: id.toString(),
    name,
    duration,
    startTime,
    endTime,
  };
};

const generateDynamicData = () => {
  const today = new Date(); // Get current date
  const data = [];

  // Loop through each day starting from today and going backwards for 4 days
  for (let i = 0; i < 10; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i); // Subtract i days from the current date
    const formattedDate = formatDate(date); // Format date as DD-MM-YYYY

    // Generate a random number of events (between 1 and 3)
    const eventCount = Math.floor(Math.random() * 3) + 1;
    const events = [];
    for (let j = 0; j < eventCount; j++) {
      events.push(generateEvent(j + 1 + i * 3)); // Unique ID generation
    }

    data.push({
      title: formattedDate,
      data: events,
    });
  }

  return data;
};
