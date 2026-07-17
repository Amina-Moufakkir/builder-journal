// The record/reflection distinction (manuscript §08). A genuine two-column comparison, so it is a real
// semantic table with column headers — not a decorative grid. The record side is objective fact; the
// reflection side is the trader's belief, set in italic to mark it as their voice. The final row states
// what each column is, and the gap between them is where the product does its work.
const PAIRS: [string, string][] = [
  ['Entry at 09:47, 1.2 lots, EURUSD', '“Setup matched my plan”'],
  ['Stop 20 pips, target 60 pips', '“I moved the stop because it felt heavy”'],
  ['Exited at 10:14 for −0.6R', '“I was already annoyed from trade two”'],
  ['Third trade that session', '“I’d take it again”'],
]

export default function RecordVsReflection() {
  return (
    <figure className="overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-left align-top">
        <thead>
          <tr className="border-rule-strong border-b">
            <th scope="col" className="text-ink font-display w-1/2 py-2 pr-4 text-sm font-semibold">
              Record — what happened
            </th>
            <th scope="col" className="text-ink font-display w-1/2 py-2 pl-4 text-sm font-semibold">
              Reflection — what the trader believes
            </th>
          </tr>
        </thead>
        <tbody>
          {PAIRS.map(([record, reflection]) => (
            <tr key={record} className="border-rule border-b">
              <td className="text-ink-muted py-2 pr-4">{record}</td>
              <td className="text-ink-muted py-2 pl-4 italic">{reflection}</td>
            </tr>
          ))}
          <tr>
            <td className="text-ink py-2 pr-4 font-medium">Objective. Verifiable. Not up for debate.</td>
            <td className="text-ink py-2 pl-4 font-medium">
              Subjective. Valuable. Sometimes wrong — and that gap is the product.
            </td>
          </tr>
        </tbody>
      </table>
    </figure>
  )
}
