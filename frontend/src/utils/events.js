export function mapEventsSnapshot(snapshot) {
  return snapshot.docs.map(mapEventDoc);
}

export function mapEventDoc(eventDoc) {
  const data = eventDoc.data();
  const { id: legacyId, ...event } = data;

  return {
    ...event,
    id: eventDoc.id,
    legacyId,
  };
}

export function sortEventsByFreshness(events) {
  return [...events].sort((a, b) => {
    const aValue = a.updatedAt || a.createdAt || a.date || '';
    const bValue = b.updatedAt || b.createdAt || b.date || '';
    return String(bValue).localeCompare(String(aValue));
  });
}
