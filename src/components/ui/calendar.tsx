"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";
import { buttonVariants } from "./button";

interface CalendarCaptionProps {
  month: Date;
  onPreviousClick: () => void;
  onNextClick: () => void;
}

function CalendarCaption({ month, onPreviousClick, onNextClick }: CalendarCaptionProps) {