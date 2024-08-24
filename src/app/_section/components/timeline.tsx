import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TTimeLineProps } from "@/types/timeline.type";

export default function BasicTimeline({ data }: { data: TTimeLineProps[] }) {
  return (
    <div className="bg-background-50 dark:bg-background-300 rounded-xl px-5 py-4">
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {data.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col gap-2 mb-3">
                <span className="text-sm text-primary">{item.timeText}</span>
                <span className="font-semibold text-base">{item.title}</span>
                <span className="font-light">{item.description}</span>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
