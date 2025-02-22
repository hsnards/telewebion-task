import { TabContent, TabList, Tabs, TabTrigger } from '@/shared/components/tabs';
import { EpisodeList, SEASON_ONE_EPISODES, SEASON_TWO_EPISODES } from './EpisodeList';

export function SeasonList() {
  return (
    <Tabs defaultValue="1">
      <TabList>
        <TabTrigger value="1">فصل اول</TabTrigger>
        <TabTrigger value="2">فصل دوم</TabTrigger>
      </TabList>
      <TabContent value="1">
        <EpisodeList episodes={SEASON_ONE_EPISODES} />
      </TabContent>
      <TabContent value="2">
        <EpisodeList episodes={SEASON_TWO_EPISODES} />
      </TabContent>
    </Tabs>
  );
}
