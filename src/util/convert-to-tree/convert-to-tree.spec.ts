import convertToTree from '.'

describe('convertToTree', () => {
  it('should convert from flat list to tree structure', () => {
    expect(
      convertToTree([
        { id: 'contact', label: 'Contact', parentId: 'about' },
        { id: 'ways-to-donate', label: 'Ways to Donate', parentId: 'about' },
        { id: 'about', label: 'About' }
      ])
    ).toEqual([
      {
        id: 'about',
        label: 'About',
        children: [
          {
            children: [],
            id: 'contact',
            label: 'Contact',
            parentId: 'about'
          },
          {
            children: [],
            id: 'ways-to-donate',
            label: 'Ways to Donate',
            parentId: 'about'
          }
        ]
      }
    ])
  })
})
