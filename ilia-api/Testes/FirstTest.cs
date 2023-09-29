namespace Testes
{
    public class FirstTest
    {
        [Fact]
        public void ShouldPassAlways()
        {
            bool variable = true;
            Assert.True(variable);
        }
    }
}