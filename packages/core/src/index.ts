type Result = {
  id: string;
};
export function funcInLibrary() {
  console.log("func in library");
  return {
    id: "special-id",
  };
}
