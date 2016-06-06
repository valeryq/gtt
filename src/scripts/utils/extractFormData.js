/**
 * Extract form data by fields
 *
 * @param fields
 *
 * @returns {{}}
 */
export default function extractFormData(fields) {
  const values = {};
  for (const key of fields) {
    if (this.refs.hasOwnProperty(key)) {
      values[key] = this.refs[key].state.value;
    }
  }

  return values;
}
