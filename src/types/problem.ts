export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export type Status = 'AC' | 'WA' | 'TODO'

export interface Problem {
  pid: string
  title: string
  difficulty: Difficulty
}
