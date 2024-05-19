import { useState } from "react";

type LessonProps = {
  title: string;
  points?: string[];
};

type LikeState = "unset" | "Liked" | "Dislike";

export function Lesson({ title, points }: LessonProps) {
  
  return (
    <details>
      <summary>
        <h2>{title}</h2>
      </summary>

      <p>{points}</p>
    </details>
  );
}
