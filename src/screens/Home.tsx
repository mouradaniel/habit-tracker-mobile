import { View, Text, ScrollView } from 'react-native';

import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';

import { HabitDay, DAY_SIZE } from '../components/HabitDay';
import { Header } from '../components/Header';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearBeginning = generateDatesFromYearBeginning();

const minimumSummayDatesSize = 18 * 10;
const amountOfDaysToFill = minimumSummayDatesSize - datesFromYearBeginning.length;

export function Home() {
  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />

      <View className='flex-row mt-6 mb-2'>
        {weekDays.map((weekDay, index) => (
          <Text 
            key={`${weekDay}-${index}`}
            className='text-zinc-400 text-xl font-bold text-center mx-1'
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className='flex-row flex-wrap'>
          {datesFromYearBeginning.map(date => (
            <HabitDay 
              key={date.toISOString()}
            />
          ))}

          {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <View
              key={index}
              className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-30'
              style={{ width: DAY_SIZE, height: DAY_SIZE }}
            />
          ))}
        </View>
      </ScrollView>

    </View>
  )
}