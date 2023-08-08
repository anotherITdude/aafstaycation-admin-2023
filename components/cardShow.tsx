import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EntryColumn } from "./columns";
interface CardShowProps {
  entries: EntryColumn[],
  title: string
}
const CardShow: React.FC<CardShowProps> = ({entries, title}) => {
  return (
    <Card className="mr-4 min-w-[200px] hover:bg-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl">{entries.length}</p>
      </CardContent>
    </Card>
  );
}

export default CardShow;
