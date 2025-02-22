import { Tabs, TabList, TabTrigger, TabContent } from "./Tabs";

export function TabsDemo() {
    return (
        <Tabs defaultValue="1">
            <TabList>
                <TabTrigger value="1">فصل ۱</TabTrigger>
                <TabTrigger value="2">فصل ۲</TabTrigger>
                <TabTrigger value="3">فصل ۳</TabTrigger>
            </TabList>
            <TabContent value="1">
                <p className="text-gray-200">محتوای فصل اول</p>
            </TabContent>
            <TabContent value="2">
                <p className="text-gray-200">محتوای فصل دوم</p>
            </TabContent>
            <TabContent value="3">
                <p className="text-gray-200">محتوای فصل سوم</p>
            </TabContent>
        </Tabs>
    );
} 