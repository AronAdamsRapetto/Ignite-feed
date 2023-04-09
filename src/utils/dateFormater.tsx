import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';

export const getLongFormatDate = (dateTime: Date) => format(dateTime, "dd 'de' MMMM 'de' yyyy 'ás' HH:mm'h'", {
  locale: ptBR
});

export const getDateRelativeToNow = (dateTime: Date) => formatDistanceToNow(dateTime, {
  locale: ptBR,
  addSuffix: true,
});