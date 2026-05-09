export interface GradeRow {
  v: string;
  font: string;
  yds: string;
  french: string;
  uiaa: string;
  chinese: string;
}

export const gradeTable: GradeRow[] = [
  { v: "VB", font: "2", yds: "5.6", french: "3", uiaa: "III", chinese: "5.6" },
  { v: "V0-", font: "3", yds: "5.7", french: "4a", uiaa: "IV", chinese: "5.7" },
  { v: "V0", font: "4", yds: "5.8", french: "4b", uiaa: "V-", chinese: "5.8" },
  { v: "V0+", font: "4+", yds: "5.9", french: "4c", uiaa: "V", chinese: "5.9" },
  { v: "V1", font: "5", yds: "5.10a", french: "5a", uiaa: "VI-", chinese: "5.10a" },
  { v: "V2", font: "5+", yds: "5.10b", french: "5b", uiaa: "VI", chinese: "5.10b" },
  { v: "V2+", font: "6A", yds: "5.10c", french: "5c", uiaa: "VI+", chinese: "5.10c" },
  { v: "V3", font: "6A+", yds: "5.10d", french: "6a", uiaa: "VII-", chinese: "5.10d" },
  { v: "V3+", font: "6B", yds: "5.11a", french: "6a+", uiaa: "VII", chinese: "5.11a" },
  { v: "V4", font: "6B+", yds: "5.11b", french: "6b", uiaa: "VII+", chinese: "5.11b" },
  { v: "V4+", font: "6C", yds: "5.11c", french: "6b+", uiaa: "VIII-", chinese: "5.11c" },
  { v: "V5", font: "6C+", yds: "5.11d", french: "6c", uiaa: "VIII", chinese: "5.11d" },
  { v: "V5+", font: "7A", yds: "5.12a", french: "6c+", uiaa: "VIII+", chinese: "5.12a" },
  { v: "V6", font: "7A+", yds: "5.12b", french: "7a", uiaa: "IX-", chinese: "5.12b" },
  { v: "V7", font: "7B", yds: "5.12c", french: "7a+", uiaa: "IX", chinese: "5.12c" },
  { v: "V7+", font: "7B+", yds: "5.12d", french: "7b", uiaa: "IX+", chinese: "5.12d" },
  { v: "V8", font: "7C", yds: "5.13a", french: "7b+", uiaa: "X-", chinese: "5.13a" },
  { v: "V8+", font: "7C+", yds: "5.13b", french: "7c", uiaa: "X", chinese: "5.13b" },
  { v: "V9", font: "8A", yds: "5.13c", french: "7c+", uiaa: "X+", chinese: "5.13c" },
  { v: "V10", font: "8A+", yds: "5.13d", french: "8a", uiaa: "XI-", chinese: "5.13d" },
  { v: "V11", font: "8B", yds: "5.14a", french: "8a+", uiaa: "XI", chinese: "5.14a" },
  { v: "V12", font: "8B+", yds: "5.14b", french: "8b", uiaa: "XI+", chinese: "5.14b" },
  { v: "V13", font: "8C", yds: "5.14c", french: "8b+", uiaa: "XII-", chinese: "5.14c" },
  { v: "V14", font: "8C+", yds: "5.14d", french: "8c", uiaa: "XII", chinese: "5.14d" },
  { v: "V15", font: "9A", yds: "5.15a", french: "8c+", uiaa: "XII+", chinese: "5.15a" },
  { v: "V16", font: "9A+", yds: "5.15b", french: "9a", uiaa: "XIII-", chinese: "5.15b" },
  { v: "V17", font: "9B", yds: "5.15c", french: "9a+", uiaa: "XIII", chinese: "5.15c" },
];

export const columnInfo = {
  v: { name: "V-Scale", nameZh: "V难度", type: "boulder" },
  font: { name: "Font", nameZh: "枫丹白露", type: "boulder" },
  yds: { name: "YDS", nameZh: "优胜美地", type: "route" },
  french: { name: "French", nameZh: "法国难度", type: "route" },
  uiaa: { name: "UIAA", nameZh: "UIAA", type: "route" },
  chinese: { name: "中国", nameZh: "中国难度", type: "route" },
} as const;

export type ColumnKey = keyof typeof columnInfo;
